'use client';

interface FlasherProps {
    message: string;
}

export default function Flasher({ message }: FlasherProps) {
    return (
        <div className="flex justify-center items-center gap-2 px-3 py-1 rounded-full bg-coral/10 text-coral text-sm font-semibold mb-6 border border-coral/20 lg:inline-flex">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coral opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-coral"></span>
            </span>
            {message}
        </div>
    );
}