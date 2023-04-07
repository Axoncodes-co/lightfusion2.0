import Text from "../../text/v2";
import { strAttr } from "../../helpers/attribute"
import { useEffect } from "react";
import { dropdownV5Handler } from "./dropdown_v5";

export function AxCustomDropdown({
  dev,
  height,
  color,
  colorHover,
  activeBackground,
  headBackground,
  headBackgroundHover,
  structure,
  title,
  link,
  dropdownid,
  targetLocator,
  exit,
  headtitle,
  headtitlecolor,
  subtrigger,
  subopening,
  background,
  dir,
  text,
  customclasses,
  options,
  bodyclasses,
  liststyle,
  listclasses,
  children
}) {

  useEffect(() => {
    // registerFunctions('dropdownV5Handler')
    console.log('dropdownV5Handler');
    dropdownV5Handler()
    return () => {
      console.log('dropdownV5Unmount');
      // dropdownV5Unmount()
    }
  }, [])
  

  const rootClass = 'axg_dropdown_head'
  const childmode = `childmode="dropdown" childmodeid="${dropdownid}" `
  const righticon = structure.indexOf('link') < 0 ? {righticon: {
    svg: `<svg ${childmode} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" height="10" x="0" y="0" viewBox="0 0 123.959 123.958" xml:space="preserve" className=""><path d="M117.979,28.017h-112c-5.3,0-8,6.4-4.2,10.2l56,56c2.3,2.3,6.1,2.3,8.401,0l56-56   C125.979,34.417,123.279,28.017,117.979,28.017z" fill="#2d2d2d" data-original="#2d2d2d" className=""></path></svg>`,
  }} : {}
  const dropdownHead = (
    <div
      {...strAttr(childmode)}
      // breakpoint="${breakpoint}"
      style={{
        height: height,
        // width: width+4
      }}
      className="dropdownHead"
      subtrigger={subtrigger}
      mode={structure}
    >
      <Text
        {...text}
        allattr={childmode}
        textclasses={`${text ? text.textclasses || '' : ''} subcontainer`}
        customclasses={`${text ? text.customclasses || '' : ''} inner colgap_l1`}
        {...righticon}
      />
    </div>
  )

  const dropdownList = dropdownContent_handler({
    dev,
    height,
    color,
    colorHover,
    activeBackground,
    headBackground,
    headBackgroundHover,
    title,
    link,
    structure,
    dropdownid,
    targetLocator,
    exit,
    headtitle,
    headtitlecolor,
    subtrigger,
    subopening,
    background,
    dir,
    text,
    bodyclasses,
    liststyle,
    customclasses,
  }, options, childmode)
  const dropdownBody = (
    <div 
      {...strAttr(childmode)}
      className={`dropdownBody ${bodyclasses || ''}`}
      mode={structure}
      // style={{"${width?`min-width:${width+"px"}`:``}"}}
    >
      <ul 
        {...strAttr(childmode)}
        style={{
          backgroundColor: background, 
          // {dir ? `direction: ${dir};` : ''},
          ...liststyle
        }}
        className={`menu ${listclasses}`}
      >
        {exit?<svg className="exitbutton" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>:``}
        {structure.indexOf('link') < 0 ? dropdownList : ''}
        {children && children.length>0 ? children : ''}
      </ul>
    </div>
  )

  if (structure.indexOf('link') < 0) {
    if (targetLocator && targetLocator.length > 0) return (
        <section
          {...strAttr(childmode)}
          className={`${rootClass} ax_elements ${customclasses}`}
        >
          <section
            style={{
              // width?`min-width:${width+"px"}`
            }}
            targetlocator={targetLocator}
            mode={structure}
            {...strAttr(childmode)}
            className={`dropdown mainDropdown ${structure}`}
          >{dropdownHead}</section>
        </section>
      )
    else return (
      <section className={`${rootClass} ax_elements ${customclasses}`}>
        <section
          style={{
            // "${width?`min-width:${width+"px"}`:``}"
          }}
          mode={structure}
          {...strAttr(childmode)}
          className={`dropdown mainDropdown ${structure}`}
        >
          {dropdownHead} 
          {dropdownBody}
        </section>
      </section>
    )
  } else return (
    <section className={`${rootClass} ax_elements ${customclasses}`}>
      <section
        style={{
          // "${width?`min-width:${width+"px"}`:``}"
        }}
        mode={structure}
        {...strAttr(childmode)}
        className={`dropdown mainDropdown ${structure}`}
      >{dropdownHead}</section>
    </section>
  )
}


// dropdown content handler
/**
 * @item.subOpening : sub, side
 * @item.subtrigger : click, hover
 */
function dropdownContent_handler(input, data, childmode) {
  
    return !data ? '' : data.map((item, key) => (<li
        key={key}
        {...strAttr(childmode)}
        subtrigger={`${item.subtrigger?item.subtrigger:'click'}`}
        className={`list ${item.subOpening?item.subOpening:'sub'} ${item.level?item.level:''}`}
      >
        <div {...strAttr(childmode)} className={`listHead ${input.structure}`}>
          <Text {...item.text}/>
        </div>
        <ul {...strAttr(childmode)} className={`subcontainer listSubmenu ${item.listclasses || ''}`}>
          {item.content ? dropdownContent_handler(input, item.content, childmode) : ``}
        </ul>
      </li>))
}
// dropdown --finish


export function DropdownTemplateHandlerBody({
  dev,
  exit,
  headTitle,
  headTitlecolor,
  height,
  color,
  colorHover,
  activeBackground,
  headBackground,
  headBackgroundHover,
  structure,
  fontsize,
  title,
  background,
  targetLocator,
  subOpening,
  options,
  optionsApi,
  dropdownid,
  listclasses,
  text,
  bodyclasses,
  textclasses,
  customclasses,
  children
}) {
  const rootClass = 'axg_dropdown_body'

  const childmode = `childmode="dropdown" childmodeid="${dropdownid}" `;
  const dropdownList = dropdownContent_handler({
    dev,
    exit,
    headTitle,
    headTitlecolor,
    height,
    color,
    colorHover,
    activeBackground,
    headBackground,
    headBackgroundHover,
    structure,
    fontsize,
    title,
    background,
    targetLocator,
    subOpening,
    options,
    optionsApi,
    dropdownid,
    listclasses,
  }, options, childmode);
  const dropdownBody = (<div
    {...strAttr(childmode)}
    className={`${rootClass} dropdownBody ${bodyclasses || ''}`}
    mode={structure}
    // style="${width?`min-width:${width+"px"}`:``}"
  >
    <ul
      {...strAttr(childmode)}
      style={{
        backgroundColor: background,
        // ${dir ? `direction: ${dir};` : ''}"}}
      }}
      className={`menu ${listclasses}`}
    >
      <Text
        {...text}
        textclasses={textclasses || ''}
        customclasses={`${customclasses || ''} dropdown dropdownHeadTitle`}
        allattr={childmode}
      />
      {exit?<svg className="exitbutton" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>:''}
      {structure.indexOf('link') < 0 ? dropdownList : ''}
      {children && children.length>0 ? children : ''}
    </ul>
  </div>)

  return (
    <section className={`dropdown ${structure}`} mode={structure} nomain={'true'} style={{top: 0}}>
      <div className={`dropdownTakeout dropdown-${dropdownid}`} id={targetLocator}>
        <section {...strAttr(childmode)} className="dropdown">{dropdownBody}</section>
      </div>
    </section>
  )
}