import GCOOMGO from '@/features/featureB/components/GCOOMGO';
import { Footer, Header } from '@/global/layouts';
import { initGoogleLogin } from '@/global/utils';

export default function Home() {
  return (
    <>
      <Header left={<div>뒤로 가기</div>} right={<div>기타 버튼들</div>} />
      <main>홈 페이지</main>
      <button onClick={initGoogleLogin}>로그인</button>
      <GCOOMGO></GCOOMGO>
      <Footer />
    </>
  );
}
