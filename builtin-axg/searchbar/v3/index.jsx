// import { registerFunctions } from "../../../../util";
import { handleimports } from "../../../util";
import Input_template from "../../input/v2";

export async function searchbar({
  preactive,
  checked,
  label,
  id,
  name,
  type,
  inputcustomclasses,
  customclasses,
  bg,
  color,
  placeholder,
  queryid,
  searchquerynames,
  searchquerylinks,
  collapseonmobile,
  dir,
  labelclasses,
  inputcovercustomclasses,
  reslistcustomclasses,
  customstyles,
  formclasses,
  outformclasses,
  dev,
  children
}) {

  // const { outformclasses='', formclasses, reslistcustomclasses='', inputcovercustomclasses, dir='ltr', hideattop=null, queryid='', searchquerynames, searchquerylinks, id='', collapseonmobile, customstyles } = input.obj
  searchQueries[queryid] = {}
  searchQueries[queryid].searchquerynames = searchquerynames
  searchQueries[queryid].searchquerylinks = searchquerylinks
  // registerFunctions('searchbarV3Handler')
  const searchicon = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M447.615,64.386C406.095,22.866,350.892,0,292.175,0s-113.92,22.866-155.439,64.386 C95.217,105.905,72.35,161.108,72.35,219.824c0,53.683,19.124,104.421,54.132,144.458L4.399,486.366 c-5.864,5.864-5.864,15.371,0,21.236C7.331,510.533,11.174,512,15.016,512s7.686-1.466,10.617-4.399l122.084-122.083 c40.037,35.007,90.775,54.132,144.458,54.132c58.718,0,113.919-22.866,155.439-64.386c41.519-41.519,64.385-96.722,64.385-155.439 S489.134,105.905,447.615,64.386z M426.379,354.029c-74.001,74-194.406,74-268.407,0c-74-74-74-194.407,0-268.407 c37.004-37.004,85.596-55.5,134.204-55.5c48.596,0,97.208,18.505,134.204,55.5C500.378,159.621,500.378,280.028,426.379,354.029z" /></g></g></svg>`
  const regExp = /[^'\x22]+/
  const inputTemplate = <Input_template
    {...strAttr({
      preactive,
      checked,
      label,
      id,
      name,
      type,
      inputcustomclasses,
      customclasses,
      bg,
      color,
      placeholder,
      queryid,
      searchquerynames,
      searchquerylinks,
      collapseonmobile,
      dir,
      labelclasses,
      inputcovercustomclasses,
      reslistcustomclasses,
      customstyles,
      formclasses,
      outformclasses,
      dev
    })}
    searchicon={searchicon}
    id=''
    regExp={regExp}
    customclasses={inputcovercustomclasses}
    inputcustomclasses={`${input.obj.inputcustomclasses} ${dir} axg_isearch axg_searchbar_segment`}
  />
	const html = `<div ${collapseonmobile ? `collapseonmobile="${collapseonmobile}"` : ''} id="${id}" queryid="${queryid}" class="axg_searchbar axg_searchbar_segment ${outformclasses}" hideAtTop="${hideattop}" style="${customstyles}">
    <form onSubmit="event.preventDefault()" class="${formclasses} ${dir == 'rtl' ? 'ltr' : 'rtl'} axg_searchbar_segment axg_searchform subcontainer wide">
      ${inputTemplate}
    </form>
    <div class="axg_searchbar_segment reslistCover">
      <ul class="axg_searchbar_segment reslist ${reslistcustomclasses}"></ul>
    </div>
    ${collapseOnMobile(collapseonmobile, id)}
  </div>`
  return html
}


function collapseOnMobile(mode, id) {
  const cssstring = `<style>
    @media(max-width: 600px) {

      #${id}.axg_searchbar_segment .axg_input {color: #0000!important}
      #${id}.axg_searchbar_segment.axg_active .axg_input {color: #000!important}

      #${id}.axg_searchbar_segment .axg_input::placeholder {color: #0000!important}
      #${id}.axg_searchbar_segment.axg_active .axg_input::placeholder {color: #636363!important}

      #${id}.axg_searchbar_segment.axg_active .axg_input {position: absolute}

      #${id}.axg_searchbar_segment.axg_active .axg_searchbar_segment.axg_searchform_button {transform: translate(0px, 0px)}
    
      #${id}.axg_searchbar_segment {width: fit-content}
    
      #${id}.axg_searchbar_segment.axg_active .axg_searchbar_segment.reslistCover {
        width: 100%;
        z-index: 9;
        transform: translateY(0px);
      }
    
      #${id} .axg_searchbar_segment.axg_searchform {
        width: 100%;
        height: 60px;
      }
    
      #${id} .axg_searchbar_segment.ax-underheader {height: 56px}
    
      #${id}.axg_searchbar_segment.axg_active .axg_searchbar_segment.axg_isearch {
        max-width: 100%;
        width: 100%;
        padding: 8px 15px 8px 55px;
        border-radius: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        height: 70px;
      }
    
      #${id} .axg_searchbar_segment.axg_isearch {
        max-width: 0;
        width: 64vw;
        padding: 5px 20px;
        min-width: 40px;
        min-height: 40px;
      }
    
      #${id}.axg_searchbar_segment.axg_active {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      
      #${id}.axg_searchbar_segment.axg_active .axg_searchbar_segment.reslist {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: 0px 4px 13px var(--ax_head_search_shadow);
        // padding-top: 70px;
      }
    
      #${id} .axg_searchbar_segment.axg_searchform_button {
        padding: 10px;
        transform: translate(-1px, 0px);
      }
    }
  </style>`

  return mode ? cssstring : ''
}