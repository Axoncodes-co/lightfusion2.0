export default function Input_template({
  customclasses,
  id,
  name,
  placeholder,
  inputcolor,
  regExp,
  children
}) {
  const bgCompiler = inputcolor?{backgroundColor: inputcolor}:null
  return <input
    customplaceholder={placeholder||null}
    style={{...bgCompiler}}
    id={id || `searchbar`}
    placeholder={placeholder || 'search...'}
    type="search"
    name={name || `search`}
    pattern={regExp}
    class={customclasses || ''}
  />
}