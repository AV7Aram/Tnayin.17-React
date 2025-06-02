import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem('users');
        return savedUsers ? JSON.parse(savedUsers) : [
            { id: 1, firstName: 'Avet', lastName: '', email: 'avet@gmail.com', password: '1234' },
            { id: 2, firstName: 'Anna', lastName: '', email: 'anna@gmail.com', password: '1234' }
        ];
    });

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const login = (email, password) => {
        const foundUser = users.find(u => u.email === email && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            return { success: true };
        }
        return { success: false, error: "Incorrect email or password  ❌" }
    };

    const register = (newUser) => {
        if (users.some(u => u.email === newUser.email)) {
            return { success: false, error: "Email already exists" };
        }
        const userWithId = { ...newUser, id: Date.now() };
        setUsers(prev => [...prev, userWithId]);
        return { success: true };
    };

    const logout = () => {
        setUser(null);
    };

    return { user, users, login, register, logout };
};
