import { useState, useEffect, useRef } from 'react';

function Login() {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState();
    const [pwd, setPwd] = useState();
    const [errMsg, setErrMsg] = useState();
    const [success, setsuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd)
        setUser('');
        setPwd('');
        setsuccess(true);
    }
    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in</h1>
                    <br />
                    <p>
                        <a href='#'>Go to Home</a>
                    </p>
                </section>
            ) : (

                <section>
                    {/* implementing accessibility */}
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type="type"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor='password'>Password:</label>
                        <input
                            type="type"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />

                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account? <br />
                        <span className='line'>
                            <a href='#'>Sign Up</a>
                        </span>
                    </p>

                </section >
            )}
        </>
    );
}

export default Login;