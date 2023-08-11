function Title({ children }: { children: React.ReactNode }){
    return (
        <div className="flex mb-2">
            <p className='font-medium text-2xl'>
                {children}
            </p>
        </div>
    )
}

export default Title