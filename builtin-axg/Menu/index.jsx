import { AxCustomDropdown } from "../dropdown/v5";

export default function Menu({dir, menuGroup, menuItems}) {
  // TODO: The dropdown is not working
  return (
    <AxCustomDropdown
      dev={menuGroup.dev}
      text={menuGroup.text}
      structure={'dropdownGroup'}
      headTitlecolor={menuGroup.headTitlecolor}
      height={menuGroup.height}
      color={menuGroup.color}
      colorHover={menuGroup.colorHover}
      activeBackground={menuGroup.activeBackground}
      headBackground={menuGroup.headBackground}
      headBackgroundHover={menuGroup.headBackgroundHover}
      title={menuGroup.title}
      background={menuGroup.background}
      subopening={menuGroup.subopening}
      subtrigger={menuGroup.subtrigger}
      dropdownid={menuGroup.dropdownid}
      dir={dir}
      customclasses={menuGroup.customclasses}
      liststyle={{columnGap: "2vw"}}
    >
      {menuItems.map((item, key) => (
        <AxCustomDropdown
          dev={item.dev}
          text={item.text}
          key={key}
          height={item.height || menuGroup.height}
          color={item.color || menuGroup.color}
          colorHover={item.activeColor || menuGroup.colorHover}
          activeBackground={item.activeBg || menuGroup.activeBackground}
          headBackground={item.headBackground || menuGroup.headBackground}
          headBackgroundHover={item.activeBg || menuGroup.headBackgroundHover}
          structure={item.structure}
          title={item.name}
          link={item.link}
          breakpoint={item.breakpoint}
          dropdownid={key}
          targetLocator={item.targetLocator}
          exit={item.exit}
          headtitle={item.headtitle}
          headtitlecolor={item.headtitlecolor}
          subtrigger={item.subtrigger}
          subopening={item.subopening}
          background={item.background}
          dir={dir}
        />
      ))}
    </AxCustomDropdown>
  )
}