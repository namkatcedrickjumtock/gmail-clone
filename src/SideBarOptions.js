import "./SideBarOptions.css"

const SideBarOptions = ({Icon, title, number,selected}) => {
  return (
    <div className={`sideBarOptions ${selected && 'sidebarOptions-active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}

export default SideBarOptions
