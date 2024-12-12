import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const [cookies] = useCookies(['authToken']);
    const authToken = cookies.authToken;
    const [isValidToken, setIsValidToken] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkTokenValidity = async () => {
            console.log('Проверка токена...');

            if (authToken) {
                console.log('authToken:', authToken);
                try {
                    console.log('Отправка запроса с токеном:', authToken);

                    const response = await fetch('http://194.58.126.202:3001/api/validate-token', {
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ token: authToken }),
                    });

                    console.log('Ответ сервера:', response);

                    if (response.ok) {
                        setIsValidToken(true);
                    } else {
                        setIsValidToken(false);
                    }
                } catch (error) {
                    console.error('Ошибка при отправке запроса на сервер: ', error);
                    setIsValidToken(false);
                } finally {
                    setIsLoading(false);
                }
            } else {
                console.log('Токен отсутствует');
                setIsValidToken(false);
                setIsLoading(false);
            }
        };

        checkTokenValidity();
    }, [authToken]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return isValidToken ? <Element {...rest} /> : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;