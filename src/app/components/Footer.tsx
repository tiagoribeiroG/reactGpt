// import { ChatMessageInput } from "./ChatMessageInput";
import { ReactNode } from 'react';

type Props = {
    disabled: boolean
    onSendMessage: (message: string) => void;
}

const ChatMessageInput = ({ disabled, onSend }: Props): ReactNode => {
    // Lógica do componente...
}

export const Footer = ({ disabled, onSendMessage }: Props) => {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                disabled={disabled}
                onSendMessage={onSendMessage}
                />
                <div className="pt-3 text-center text-xs text-gray-300">
                    by Tiago. <br/>
                    <a href="" className="underline">
                        Quer aprender a programar
                    </a>

                </div>
            </div>

        </footer>
    )
}