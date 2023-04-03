import Link from "next/link"
import Axicon from "../../icon/v2"
import { strAttr } from "../../helpers/attribute"

export default function Text({
  alt,
  orderdirection,
  innercustomclasses,
  textalign,
  subtextalign,
  textfontsize,
  link,
  textcolor,
  textclasses,
  subtext,
  subtextclasses,
  subtextcolor,
  subtextfontsize,
  icon,
  dev,
  tag='h2',
  text='',
  customclasses,
  inlinestyle,
  nomargin=0,
  id,
  onClick,
  arialabel,
  allattr,
  attr,
  righticon,
  children
}) {
  const childrenStrucrue = children || artificialChild({
    alt,
    orderdirection,
    innercustomclasses,
    textalign,
    subtextalign,
    textfontsize,
    link,
    textcolor,
    textclasses,
    subtext,
    subtextclasses,
    subtextcolor,
    subtextfontsize,
    icon,
    dev,
    children,
    tag,
    righticon,
    text,
    customclasses,
    inlinestyle,
    nomargin,
    id,
    onClick,
    allattr,
    attr,
    arialabel
  })

  return link
    ? <Link
        href={link}
        aria-label={arialabel}
        {...strAttr(allattr)} 
        {...strAttr(attr)} 
        id={id}
        onClick={onClick} 
        className={`subcontainer axgText default ${customclasses} ${nomargin ? 'nomargin' : ''}`} 
        style={{
          ...inlinestyle,
          height: '100%'
        }}
      >{childrenStrucrue}</Link>
    : <section
        {...strAttr(allattr)} 
        {...strAttr(attr)}
        id={id}
        onClick={onClick}
        className={`subcontainer axgText default ${customclasses} ${nomargin ? 'nomargin' : ''}`}
        style={{
          ...inlinestyle,
          height: '100%'
        }}
      >
        {childrenStrucrue}
      </section>
}

function artificialChild({
  orderdirection='vertical',
  tag='h2',
  innercustomclasses='',
  link,
  text,
  textclasses,
  subtext,
  subtextclasses,
  textattr='',
  allattr='',
  icon,
  righticon
}) {
  const Tag = tag
  const iconStruct = icon ? <Axicon {...icon} /> : ''
  const righticonStruct = righticon ? <Axicon {...righticon} /> : ''
  const textStruct = text && text.length > 0 ? <Tag {...strAttr(allattr)} style={{height: '100%'}}  className={`axgText ${textclasses}`}>{text}</Tag> : ''
  const subTextStruct = subtext ? <p {...strAttr(allattr)} className={`axgText ${subtextclasses}`}>{subtext}</p> : ''
  return <>
    {iconStruct}
    <section
      {...strAttr(allattr)}
      className={`${innercustomclasses} unsetPos subcontainer ${orderdirection}`}
      style={{width: 'fit-content', height: '100%'}}
    >
      {textStruct ? <section
        style={{height: '100%'}}
        {...strAttr(allattr)}
        {...strAttr(textattr)}
        className={"unsetPos subcontainer"}
      >{textStruct}</section> : ''}
      {subTextStruct ? <section
        style={{height: '100%'}}
        {...strAttr(allattr)} 
        className={"unsetPos subcontainer"}
      >{subTextStruct}</section>: ''}
    </section>
    {righticonStruct}
  </>
}