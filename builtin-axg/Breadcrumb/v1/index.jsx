// import { handleimports } from "../../../util"
import { AxCustomDropdown, DropdownTemplateHandlerBody } from "../../dropdown/v5"
import Text from "../../text/v2"

export function AxgBreadcrumb({
  dropdownone_head,
  dropdownone_body,
  dropdowntwo_head,
  dropdowntwo_body,
  primaryText,
  customclasses,
  children
}) {

  const separator = <svg className='secondary_fill' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 48 48' height="20"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z"/></svg>

  // replace text with a ... on mobile
  dropdownone_head.text.subtext = `${dropdownone_head.text.text.slice(0, 3)}...`
  dropdownone_head.text.subtextclasses = `${dropdownone_head.text.textclasses || ''} ${dropdownone_head.text.subtextclasses || ''} secondary_color tertiary_color_hover nomargin shortenonmobile_short`
  dropdownone_head.text.textclasses = `${dropdownone_head.text.textclasses || ''} nomargin shortenonmobile_full`
  dropdownone_head.text.innercustomclasses = `${dropdownone_head.text.innercustomclasses || ''} rowgap_l0 shortenonmobile`

  if (dropdowntwo_head && dropdowntwo_head.length) {
    dropdowntwo_head.text.subtext = `${dropdowntwo_head.text.text.slice(0, 3)}...`
    dropdowntwo_head.text.subtextclasses = `${dropdowntwo_head.text.textclasses || ''} ${dropdowntwo_head.text.subtextclasses || ''} secondary_color tertiary_color_hover nomargin shortenonmobile_short`
    dropdowntwo_head.text.textclasses = `${dropdowntwo_head.text.textclasses || ''} nomargin shortenonmobile_full`
    dropdowntwo_head.text.innercustomclasses = `${dropdowntwo_head.text.innercustomclasses || ''} rowgap_l0 shortenonmobile`
  }

  const dropdownone = (
    <div>
      {/* <AxCustomDropdown {...dropdownone_head}/> */}
      <section className="ax_elements" nomain="true">
        {/* <DropdownTemplateHandlerBody {...dropdownone_body}/> */}
      </section>
    </div>
  )

  const dropdowntwo = dropdowntwo_head != 'null' ? (<div>
    {/* <AxCustomDropdown {...dropdowntwo_head}/> */}
    <section className="ax_elements" nomain="true">
      {/* <DropdownTemplateHandlerBody {...dropdowntwo_body}/> */}
    </section>
  </div>) : ''
  
  return (<div style={{zIndex: 2}} className={`subcontainer horizontal fitWidth colgap_l0 ${customclasses}`}>
    <Text {...primaryText} />
    {separator}
    {dropdownone}
    {dropdowntwo_head != 'null' ? separator : ''}
    {dropdowntwo}
  </div>)
}