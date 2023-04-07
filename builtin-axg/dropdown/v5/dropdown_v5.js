// import { getEventListeners } from "events"

// import { getEventListeners } from "stream"
const elementsevents = []
export function dropdownV5Handler() {
  // dropdown handler
  const dropdowns = document.querySelectorAll(".ax_elements .dropdown")
  const dropdownHeaders = document.querySelectorAll(".ax_elements .dropdown .dropdownHead")
  const dropdownSubMenuDiv = document.querySelectorAll(".ax_elements .dropdown .dropdownBody .menu li[subtrigger='click'] > div")
  const dropdownSubMenu = document.querySelectorAll(".ax_elements .dropdown .dropdownBody .menu li[subtrigger='click']")

  // handle submenu clicks
  // dropdownSubMenuDiv.forEach(element => {
  //   if (!element.classList.contains("singletab")) element.addEventListener("click", event => {
  //     event.preventDefault()
  //     const currentmenu = [...dropdowns].filter(dropdown => dropdownSubMenu.getAttribute('childModeId') == dropdown.getAttribute('childModeId'))[0]
  //     currentmenu.classList.contains("subopen") ? currentmenu.classList.remove("subopen") : currentmenu.classList.add("subopen")
  //   })
  // })

  dropdownHeaders.forEach(element => {
    dropdownTrigger(
      element.getAttribute('subtrigger'),
      [...dropdowns].filter(dropdown => dropdown.getAttribute('childModeId') == element.getAttribute('childModeId'))[0],
      element, 
      element.getAttribute('childmodeid')
    )
  })
  // click away handler
  // hover:
  document.querySelectorAll(".ax_elements .dropdown li[subtrigger='hover']").forEach(element => {
    document.querySelectorAll(".ax_elements .dropdown li[subtrigger='hover'] li").forEach(subElement => {
      const dropdownv5clickawayhandler = () => {if (subElement.classList.contains("subopen")) subElement.classList.remove("subopen")}
      // if (!getEventListeners(subElement).mouseleave.filter(({listener}) => listener.name == "dropdownv5clickawayhandler").length)
      subElement.removeEventListener("mouseleave", dropdownv5clickawayhandler)
      subElement.addEventListener("mouseleave", dropdownv5clickawayhandler)
    })
  })
  // click:
  const dropdownv5clickhandler = event => {
      const dropdownHeaders = document.querySelectorAll(".ax_elements .dropdown .dropdownHead")
      // if the click is on a dropdown
      let triggerOnDropdown = false
      if (event.target.getAttribute("childmode") == "dropdown" ) triggerOnDropdown = true
  
      if (!triggerOnDropdown) {
        dropdownHeaders.forEach(dom => {
          const currentmenu = document.querySelectorAll(`.ax_elements .dropdown .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody .menu li[subtrigger='click'].subopen`)
          currentmenu.forEach(element => element.classList.remove("subopen"))
          if (document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody`))
            closeDom(
              document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}']`), 
              document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody`), 
              document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownHead`), 
              document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody .menu`),
            )
        })
      } else {
        dropdownHeaders.forEach(dom => {
          if (event.target.getAttribute("childmodeid") == dom.getAttribute("childmodeid") && document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody`) && document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody`).length>=0) {
            const currentmenu = document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody .menu li[subtrigger='click'].subopen`)
            currentmenu.forEach(element => {
              if (!isDescendant(element, event.target)) element.classList.remove("subopen")
            })
            closeDom(
              document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}']`), 
              document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody`), 
              document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownHead`), 
              document.querySelector(`.ax_elements .dropdown[childmodeid='${dom.getAttribute('childmodeid')}'] .dropdownBody .menu`),
            )
          }
        })
    }
  }
  // if (!getEventListeners(window).click.filter(({listener}) => listener.name == "dropdownv5clickhandler").length)
  window.removeEventListener("click", dropdownv5clickhandler)
  window.addEventListener("click", dropdownv5clickhandler)


  function isDescendant(parent, child) {
    var node = child.parentNode
    while (node != null) {
      if (node == parent) return true
      node = node.parentNode
    }
    return false
  }

  function dropdownTrigger(trigger, dropdown, dropdownHeader, key) {
    switch(trigger) {
      case 'click': dropdownClickTrigger(dropdownHeader, key); break
      case 'hover': dropdownHoverTrigger(dropdown, key); break
      // The default is for the structures such as link structure that do not need any eventListener
      default: break
    }
  }

  function dropdownHoverTrigger(element) {
    const dropdownv5mouseentertrigger = () => { dropdownHandler(element.getAttribute('childmodeid')) }
    const dropdownv5mouseleavetrigger = () => {
      const currentmenu = document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${element.getAttribute('childmodeid')}'] .dropdownBody .menu li[subtrigger='click'].subopen`)
      currentmenu.forEach(element1 => { element1.classList.remove("subopen")})
      dropdownHandler(element.getAttribute('childmodeid'))
    }
    // if (!getEventListeners(element).mouseenter.filter(({listener}) => listener.name == "dropdownv5mouseentertrigger").length)
    element.removeEventListener("mouseenter", dropdownv5mouseentertrigger)
    element.addEventListener("mouseenter", dropdownv5mouseentertrigger)
    // if (!getEventListeners(element).mouseleave.filter(({listener}) => listener.name == "dropdownv5mouseleavetrigger").length)
    element.removeEventListener("mouseleave", dropdownv5mouseleavetrigger)
    element.addEventListener("mouseleave", dropdownv5mouseleavetrigger)
  }

  function dropdownClickTrigger(element) {
    function dropdownv5dropdownClickTriggerfunc() { dropdownHandler(element.getAttribute('childmodeid')) }
    if (!elementsevents.filter(item => item.element == element && item.func.name == dropdownv5dropdownClickTriggerfunc.name).length) {
      elementsevents.push({element, func: dropdownv5dropdownClickTriggerfunc})
      element.addEventListener("click", dropdownv5dropdownClickTriggerfunc)
    }
  }

  document.querySelectorAll(".dropdown.mega .dropdownBody .menu").forEach(element => {
    const dropdownv5dropdownmegafunc = () => {
      element.querySelector(".dropdownHeadTitle").style.opacity = element.scrollTop === 0 ? 1 : 1-((element.scrollTop)/56)
    }
    // if (!getEventListeners(element).scroll.filter(({listener}) => listener.name == "dropdownv5dropdownmegafunc").length)
    element.removeEventListener("scroll", dropdownv5dropdownmegafunc)
    element.addEventListener("scroll", dropdownv5dropdownmegafunc)
  })


  // head title settings
  document.querySelectorAll(`.ax_elements:not([nomain="true"]) > section.dropdown`).forEach((element) => {
    if (document.querySelector(`.dropdown .dropdownBody[childmodeid='${element.getAttribute("childmodeid")}'] .menu .dropdownHeadTitle`)) {
      const inner = element.querySelector(".dropdownHead .inner")
      document.querySelector(`.dropdown .dropdownBody[childmodeid='${element.getAttribute("childmodeid")}'] .menu .dropdownHeadTitle`).style.color = inner.getAttribute("headTitleColor")
    }
  })


  // style on hover
  document.querySelectorAll(`.ax_elements:not([nomain="true"]) > section.dropdown`).forEach((element) => {
    const inner = element.querySelector(".dropdownHead .inner")
    const dropdownv5mouseoverstylehandleron = () => {
      if (!element.classList.contains("open")) {
        if (element.querySelector(".dropdownHead .inner .dropicon")) {
          element.querySelector(".dropdownHead .inner .dropicon.whitedown").classList.remove('off')
          element.querySelector(".dropdownHead .inner .dropicon.darkdown").classList.add('off')
        }
        inner.style.backgroundColor = inner.getAttribute("headbackgroundhover")
        inner.style.color = inner.getAttribute("colorhover")
        
      }
    }
    // if (!getEventListeners(element).mouseover.filter(({listener}) => listener.name == "dropdownv5mouseoverstylehandleron").length)
    element.removeEventListener("mouseover", dropdownv5mouseoverstylehandleron)
    element.addEventListener("mouseover", dropdownv5mouseoverstylehandleron)

    const dropdownv5mouseoverstylehandleroff = () => {
      if (!element.classList.contains("open")) {
        if (element.querySelector(".dropdownHead .inner .dropicon")) {
          element.querySelector(".dropdownHead .inner .dropicon.whitedown").classList.add('off')
          element.querySelector(".dropdownHead .inner .dropicon.darkdown").classList.remove('off')
        }
        inner.style.backgroundColor = inner.getAttribute("headbackground")
        inner.style.color = inner.getAttribute("color")
      }
    }
    // if (!getEventListeners(element).mouseout.filter(({listener}) => listener.name == "dropdownv5mouseoverstylehandleroff").length)
    element.removeEventListener("mouseout", dropdownv5mouseoverstylehandleroff)
    element.addEventListener("mouseout", dropdownv5mouseoverstylehandleroff)
  })


  function dropdownHandler(key) {

    const dropdown = document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${key}']`)
    const head = document.querySelector(`.ax_elements .dropdown .dropdownHead[childmodeid='${key}']`)
    const body = document.querySelector(`.ax_elements .dropdown .dropdownBody[childmodeid='${key}']`)
    const menu = document.querySelector(`.ax_elements .dropdown .dropdownBody .menu[childmodeid='${key}']`)
    const lists = document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${key}'] .dropdownBody .menu li`)
    
    // close other dropdowns
    const otherKeys = [...new Set([...document.querySelectorAll(`.ax_elements .dropdown:not([childmodeid='${key}'])`)].map(dropdown => dropdown.getAttribute('childmodeid')).filter(key => key))]
    otherKeys.forEach(key => {
      closeDom(
        document.querySelectorAll(`.ax_elements .dropdown[childmodeid='${key}']`),
        document.querySelector(`.ax_elements .dropdown .dropdownBody[childmodeid='${key}']`),
        document.querySelector(`.ax_elements .dropdown .dropdownHead[childmodeid='${key}']`),
      )
    })


    // open/close handler
    if (body) dropdown[0].classList.contains("open") 
      ?closeDom(dropdown, body, head, menu)
      :openDom(dropdown, body, head, lists, menu)
      
    // // subopening handler
    // document.querySelectorAll(`.ax_elements .dropdown[childmodeid="${key+1}"] .dropdownBody .menu li.side > ul`).forEach((dom, key2) => {
    //   handleTheDropdownsFallingOutOfView(key+1, dom)
    // })

    // custom --mega
    if (body && body.getAttribute('mode') == "mega") body.style[leftOrRight] = "-"+dropdown[offset]+"px"
  }

  const leftOrRight = document.documentElement.dir == 'rtl' ? 'right' : 'left'
  const offset = document.documentElement.dir == 'rtl' ? 'offsetRight' : 'offsetLeft'

  function handleTheDropdownsFallingOutOfView(baseDom, targetDom) {
    // const windowsWidth = document.documentElement.offsetWidth
    // const targetDomRect = targetDom.getBoundingClientRect()
    // const baseDomRect = baseDom.getBoundingClientRect()

    // const side = baseDomRect[leftOrRight]
    // const otherside = windowsWidth - baseDomRect[leftOrRight] - targetDomRect.width
    
    // targetDom.style[leftOrRight] = `${otherside >= 0 ? side : side+otherside}px`
  }

  function closeDom(dropdown, body, head) {
    // only perform the closing function if the dropdown header contains the open class
    if (head.classList.contains("open")) {
      if (dropdown.length > 1) {
        dropdown[0].classList.remove("open")
        dropdown[1].classList.remove("open")
      }
      else dropdown[0].classList.remove("open")
      if (body) {
        body.classList.remove("open")
        body.style.maxHeight = 0
      }
      if (head) {
        head.classList.remove("open")
        head.querySelector(".inner").style.backgroundColor=head.querySelector(".inner").getAttribute("headbackground")
        head.querySelector(".inner").style.color=head.querySelector(".inner").getAttribute("color")
        if (head.querySelector(".inner .dropicon")) {
          head.querySelector(".inner .dropicon.whitedown").classList.add('off')
          head.querySelector(".inner .dropicon.darkdown").classList.remove('off')
        }
      }
    }
  }

  function openDom(dropdown, body, head, lists, menu) {
    console.log('open')
    var height = 0, minMenuHeight = menu.clientHeight

    dropdown[0].classList.add("open")
    if (dropdown.length > 1) dropdown[1].classList.add("open")

    body.classList.add("open")
    head.classList.add("open")
    head.querySelector(".inner").style.backgroundColor=head.querySelector(".inner").getAttribute("activebackground")
    head.querySelector(".inner").style.color=head.querySelector(".inner").getAttribute("colorhover")
    if (head.querySelector(".inner .dropicon")) {
      head.querySelector(".inner .dropicon.whitedown").classList.remove('off')
      head.querySelector(".inner .dropicon.darkdown").classList.add('off')
    }
    lists.forEach(list => {
      height += list.clientHeight
      body.style.maxHeight = (height+minMenuHeight)+"px"
    })

    if (dropdown[0].getAttribute("mode").indexOf("mega") >= 0) {
      const megaheight = body.querySelector('.menu').getBoundingClientRect().width > window.innerWidth ? 'unset' : window.innerHeight+'px'
      body.style.height = megaheight
      const megaheight2 = body.querySelector('.menu').getBoundingClientRect().width > window.innerWidth ? 'unset' : window.innerHeight+'px'
      body.style.height = megaheight2
      body.querySelector(".menu").style.height = (megaheight)
    }
    if (dropdown[0].getAttribute("mode").indexOf("simple") >= 0) {
      if (document.querySelector(`section.dropdown ul.menu[childmodeid="${body.getAttribute("childmodeid")}"]`))
        handleTheDropdownsFallingOutOfView(
          document.querySelector(`section.dropdown.mainDropdown[childmodeid="${body.getAttribute("childmodeid")}"]`),
          document.querySelector(`section.dropdown ul.menu[childmodeid="${body.getAttribute("childmodeid")}"]`)
        )
    }
  }


  // active megadropdown size handler
  function dropdownv5megasizehandler() {
    document.querySelectorAll('.dropdown.open').forEach(element => {
      if (element.getAttribute("mode") && element.getAttribute("mode").indexOf("mega") >= 0) {
        var body
        if (element.getAttribute("targetlocator")) body = document.querySelector(`#${element.getAttribute("targetlocator")} .dropdownBody`)
        else body = element.querySelector(".dropdownBody")
        const megaheight = body.getBoundingClientRect().width > window.innerWidth ? 'unset' : window.innerHeight+'px'
        body.style.height = megaheight
        body.querySelector(".menu").style.height = (megaheight)
      }
    })


    document.querySelectorAll('.dropdown').forEach(element => {
      if (element.getAttribute("mode") && element.getAttribute("mode").indexOf("simple") >= 0) {
        // the 'left' for simple dropdowns with 'nomain'
        if (document.querySelector(`section.dropdown ul.menu[childmodeid="${element.getAttribute("childmodeid")}"]`)) {
          handleTheDropdownsFallingOutOfView(
            document.querySelector(`section.dropdown.mainDropdown[childmodeid="${element.getAttribute("childmodeid")}"]`),
            document.querySelector(`section.dropdown ul.menu[childmodeid="${element.getAttribute("childmodeid")}"]`)
          )
        }
      }
    })
  }
  // if (!getEventListeners(window).resize.filter(({listener}) => listener.name == "dropdownv5megasizehandler").length)
  window.removeEventListener("resize", dropdownv5megasizehandler)
  window.addEventListener("resize", dropdownv5megasizehandler)
  dropdownv5megasizehandler()
}