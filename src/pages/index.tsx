import GCOOMGO from '@/features/featureB/components/GCOOMGO';
import { Footer, Header } from '@/global/layouts';

export default function Home() {
  return (
    <>
      <Header left={<div>뒤로 가기</div>} right={<div>기타 버튼들</div>} />
      <main>홈 페이지</main>
      <GCOOMGO></GCOOMGO>
      <Footer />
    </>
  );
}
