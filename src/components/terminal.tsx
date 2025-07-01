"use client";
import { ReactElement, useState, useEffect } from "react";

export const Terminal: React.FC = (): ReactElement => {
  const [ terminalText, setTerminalText ] = useState<string>("Please enter your command:");
  const [ inputText, setInputText ] = useState<string>("");
  
  const handleTerminalSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`/images?guess=${inputText}`);
    console.log('[DEBUG] res', res);
    setInputText("");
  }

  return (
    <div className="bg-emerald-900 text-emerald-200 w-[600px] border-1 border-green-500 p-2">
      <p className="p-0">{terminalText}</p>
      <form onSubmit={handleTerminalSubmit}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}/>
      </form>
    </div>
  );
}