import dynamic from 'next/dynamic'
const Searchbar = dynamic(() => import('../../axg-react/Searchbar3'), {ssr: false})

export default function Header() {
  return (
    <Searchbar
      id={'main_searchbar'}
      dev={'staging'}
      name={'main_searchbar'}
      inputcustomclasses={'font_l1 wide padding_l3 noborder round_l3'}
      customclasses={'wide'}
      bg={'#c1c1c1a3'}
      color={'#000'}
      placeholder={'Search whatever the fuck you need...'}
      queryid={'mainsearchquery'}
      collapseonmobile={'1'}
      labelclasses={'subcontainer lefty hoversearchcoverlabel'}
      inputcovercustomclasses={'subcontainer vertical'}
      reslistcustomclasses={'boxshadow darker rtl'}
      outformclasses={'searchbarsizes'}
      searchquerynames={['name1', 'name2']}
      searchquerylinks={['link1', 'link2']}
    />
  )
}
