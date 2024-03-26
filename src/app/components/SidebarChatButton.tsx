import { Chat } from "@/types/Chat"
import { useState } from "react";
import IconChatLeft from "./icons/IconChatLeft";
import IconTrash from "./icons/inconTrash";
import IconBxsEditAlt from "./icons/IconEdit";

type Props = {
    chatItem: Chat;
    active: boolean;
    onClick: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

export const SidebarChatButton = ({ chatItem, active, onClick, onDelete, onEdit }: Props) => {
    const [deleting, setDeleting] = useState(false);
    const [editing, setediting] = useState(false);
    const [titleInput, setTitleInput] = useState(chatItem.title);

    return (
        <div className={`flex items-center rounded-md p-3 text-sm cursor-pointer
         hover:bg-gray-500/10 ${active ? 'bg-gray500/20' : 'bg-transparent'} `}>
           
           <div className="mr-3">
            {!deleting && <IconChatLeft width={16} height={16} />}
            {deleting && <IconTrash width={16} height={16} />}

           </div>
           <div className="flex-1 text-sm overflow-x-hidden">
            {editing && 
            <input 
                className="w-full bg-transparent text-sm outline-none border border-blue-500"

                value={titleInput}
                onChange={e=>setTitleInput(e.target.value)}

            />

            }
            {!editing &&
            <div className="border border-transparent">
                {!deleting && chatItem.title}
                {deleting && `Delete "${chatItem.title}"`}

                </div>
            
            }
           </div>
            {active && !deleting && !editing && 
                <div className="flex">
                    <div onClick={() => setediting(true)} className="cursor-pointer mx-1 
                    opacity-60 hover:opacity-100">
                        <IconBxsEditAlt width={16} height={16} />
                    </div>

                    <div onClick={() => setDeleting(true)} className="cursor-pointer mx-1 
                    opacity-60 hover:opacity-100">
                        <IconBxsEditAlt width={16} height={16} />
                    </div>

{/* 3:06 */}

                </div>
            }


        </div>
    )

}