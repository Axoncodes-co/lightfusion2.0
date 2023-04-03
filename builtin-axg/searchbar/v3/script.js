// function searchbarV3Handler() {
  document.querySelectorAll('.axg_searchbar_segment.axg_searchbar').forEach(searchbarSegment => {

    if (!searchbarSegment.getAttribute('queryid')) return;
    const queryid = searchbarSegment.getAttribute('queryid')
    const search_box = searchbarSegment.querySelector(".axg_isearch")
    const reslist = searchbarSegment.querySelector(".reslist")
    const reslistCover = searchbarSegment.querySelector(".reslistCover")

    handleResultsListPadding(search_box, reslist)
    window.addEventListener('resize', () => {handleResultsListPadding(search_box, reslist)})

    const query = searchQueries[queryid]
    const names = query.searchquerynames
    const links = query.searchquerylinks

    search_box.addEventListener("input", () => {
      reslist.style.paddingTop = `0px`
      reslist.innerHTML = ''
      console.log('new input');
      if ((search_box.value).length <= 0) return;

      handleResultsListPadding(search_box, reslist)
      for (i=0; i < names.length; i++)
        if ((names[i].toLowerCase().search(search_box.value.toLowerCase())) >= 0 ) reslist.innerHTML += `<li><a href="${links[i]}">${names[i]}</a></li>`
    })

    // searchbox handle
    if (searchbarSegment.querySelector(".axg_searchform")) searchbarSegment.querySelector(".axg_searchform").addEventListener("click", e => {
      e.preventDefault()
      searchbarSegment.classList.add("axg_active")
      if (searchbarSegment.getAttribute('collapseonmobile')) activationHandlerstart(searchbarSegment.getAttribute('id'))
      reslistCover.style.display = "block"
    })
    if (searchbarSegment.getAttribute('collapseonmobile')) document.getElementById("axg_naturalizer").addEventListener("click", () => {
      searchbarSegment.classList.remove("axg_active")
      reslistCover.style.display = "none"
    })
  })

  function handleResultsListPadding(search_box, reslist) {
    // reslist.style.paddingTop = search_box.offsetHeight+'px'
  }

// }
