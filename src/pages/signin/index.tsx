import styles from './SignIn.module.css';
import { initGoogleLogin } from '@/global/utils';

export default function SignIn() {
  return (
    <div className={styles.container}>
      <img 
        src="/gbike.png" 
        alt="gbike logo" 
        className={styles.logo}
      />
      <img 
        src="/google_login.png" 
        alt="google login button" 
        className={styles.googleLogin}
        onClick={initGoogleLogin}
      />
    </div>
  );
}
