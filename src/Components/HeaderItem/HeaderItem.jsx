function HeaderItem({name, Icon}) {
    return (
        <div className='flex items-center gap-3 text-white font-semibold text-[20px] cursor-pointer hover:underline underline-offset-8 decoration-2 transition-all mb-3'>
            <Icon />
            <h2 className="text-[16px]">{name}</h2>
      </div>
  )
}

export default HeaderItem 