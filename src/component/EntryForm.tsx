import React, { useState, FormEvent } from 'react';

interface EntryFormProps {
    onSubmit?: (data: { name: string; email: string }) => void;
}

const EntryForm: React.FC<EntryFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ name, email });
        }
        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </div>
            <div style={{ marginTop: 12 }}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit" style={{ marginTop: 16 }}>
                Submit
            </button>
        </form>
    );
};

export default EntryForm;