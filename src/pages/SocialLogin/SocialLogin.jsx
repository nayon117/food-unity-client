import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const SocialLogin = () => {

    const { googleLogin } = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
            console.log(res.user);
                toast.success('Login Successful')
                navigate('/')
            })
            .catch(error => {
            console.log(error);
            toast.error('Something went wrong')
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex items-center mx-auto btn btn-sm bg-white border border-gray-500 gap-3">
                <FcGoogle></FcGoogle>
                <span>Log in with Google</span>
              </button>
        </div>
    );
};
export default SocialLogin;