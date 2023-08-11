type Props = {
    messages: Array<{
        role: string,
        content: string
    }>;
}

function Chat(props: Props) {
    return (
        <>
            <div className="flex flex-col gap-4 mb-10" id='chat-messages'>
                {
                    props.messages ?
                    props.messages.map((message: {role: string, content: string}, index: number) => (
                        <div key={index} className={`flex flex-col gap-2 [&>div]:items-start [&>div]:bg-opacity-50' ${message.role == 'system' ? 'hidden' : (
                            message.role == 'assistant' ? 'items-end  [&>div]:bg-blue-300' : '[&>div]:items-start [&>div]:bg-green-400'
                        )}`}>
                            <div className="flex flex-col max-w-[66%] rounded-lg w-fit ">
                                <p id="user-name" className='font-medium text-lg px-4 py-1'>{message.role}</p>
                                <p className='font-light text-base px-4 pb-3 text-start'>{message.content}</p>
                            </div>
                        </div>
                    )) : 
                    <p>Ingrese un JSON valido para mostrar el chat</p>
                }
            </div>
        </>
    )
}

export default Chat