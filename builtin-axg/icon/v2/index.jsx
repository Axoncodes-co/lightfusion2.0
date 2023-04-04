import Image from "next/image"
import Link from "next/link"

function handleIcon({
  iconclasses,
  customclasses,
  limit,
  plane,
  url,
  isfont,
  midactive='',
  tags=[],
  color,
  svg,
  src,
  size,
  margin,
  filterPlacement='filterPlacement',
  boxshadow,
  content,
  name,
  alt
}) {
  /**
   * svg: svg -> svg tag
   * img: src -> url
   * i: icon -> class
  */
  const compiledTags = tags.join(' ')
  const compiledmidactive = midactive ? 'midactive' : ''
  const compiledfilterPlacement = plane ? '' : filterPlacement
  const rootclass = 'axg_icon'
  const compiledColor = `color: ${color}`
  const compiledmargin = margin ? 'margin' : ''
  const compiledlimit = limit ? 'limit' : ''
  const compiledboxshadow = boxshadow ? 'boxshadow' : ''
  const compiledname = name ? 'split' : 'center'
  
  const compiledContent = classes => <span dangerouslySetInnerHTML={{__html: svg}}></span> || content || imgOrIcon(classes)
  const compiledClasses = classes => `subcontainer ${rootclass} ${compiledmidactive} ${compiledfilterPlacement} ${compiledTags} ${classes}`
  const ahrefHandler = (content, classes) => url ? <Link href={url} className={`subcontainer ${compiledClasses(classes)}`} style={{...compiledColor}}>{content}</Link> : ''
  const imgHandler = () => src ? <Image width={20} height={20} src={src} alt={alt} className={`subcontainer ${rootclass} ${customclasses}`} /> : ''
  const iHandler = classes => iconclasses ? <i style={{...compiledColor}} className={`subcontainer ${compiledClasses(classes)}`}></i> : ''
  const imgOrIcon = classes => isfont == 0 || isfont == '0' ? imgHandler() : iHandler(`${classes} ${iconclasses}`)

  const classes = (plane ? `i subcontainer ${size} ${compiledmargin} ` : `${compiledmargin} ${compiledlimit} ${compiledboxshadow} subcontainer iconBody ${size} ${compiledname} `)

  const contentInstant = compiledContent(classes)
  
  const html = url
    ? ahrefHandler(contentInstant)
    : (
      plane
        ? (contentInstant || '')
        : (contentInstant
            ? <div {...compiledTags} className={`${customclasses} subcontainer fitWidth ${compiledClasses(classes)}`}>{contentInstant}</div>
            : ''
        )
    )

  return html
}

export default function Axicon({
  plane,
  isfont,
  src,
  color,
  name,
  iconclasses,
  customclasses,
  limit,
  url,
  midactive='',
  tags=[],
  svg,
  size,
  margin,
  filterPlacement='filterPlacement',
  boxshadow,
  alt,
  children
}) {

  if (plane) return handleIcon({
    iconclasses,
    customclasses,
    limit,
    plane,
    url,
    isfont,
    midactive,
    tags,
    color,
    svg,
    src,
    size,
    margin,
    filterPlacement,
    boxshadow,
    name,
    alt
  })

  const content = (<>
    <div className="subcontainer background"></div>
    {isfont == 0 || isfont == '0'
    ? <Image width={20} height={20} src={src} alt={''} />
    :(<div>
      <i style={{color: color}} className={`subcontainer rexfont_init iconPlaceholder ${src}`} ></i>
      <i style={{color: color}} className={`subcontainer rexfont_init i ${src}`} ></i>
    </div>)}
    {/* {name ? axtitle({tag:'span', text:name, customclasses:['boxTitle']}) : ''} */}
  </>)

  const html = handleIcon({
    iconclasses,
    customclasses,
    limit,
    plane,
    url,
    isfont,
    midactive,
    tags,
    color,
    svg,
    src,
    size,
    margin,
    filterPlacement,
    boxshadow,
    content,
    name,
    alt
  }, content)
  
  return html
}