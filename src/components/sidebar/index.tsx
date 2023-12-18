import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className='nueumorphism rounded-md bg-main mt-28 ml-5'>
      <div className='mt-7 mx-2 mb-24'>
        <SidebarItem title='Todo' href='/todo' />
        <SidebarItem title='List' href='/list' />
        <SidebarItem title='Diary' href='/diary' />
      </div>
    </div>
  );
};

export default Sidebar;
