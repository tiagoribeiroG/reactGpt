// import { ChatMessageInput } from "./ChatMessageInput";
import { ReactNode } from 'react';
import { ChatMessageInput } from './ChatMessageInput';

type Props = {
    disabled: boolean
    onSendMessage: (message: string) => void;
}

// const ChatMessageInput = ({ disabled, onSendMessage }: Props): ReactNode => {
  
// }

export const Footer = ({ disabled, onSendMessage }: Props) => {
    return (
        <footer className="w-full border-t border-t-gray-600 p-2">
            <div className="max-w-4xl m-auto">
                <ChatMessageInput
                disabled={disabled}
                onSend={onSendMessage}
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

export default Footer