import ScrollArea from '@/global/components/ScrollArea';
import { MEET_LIST_MOCKUP } from '../constants';
import MeetingListItem from './MeetingListItem';

type Props = {
  selectedId: number | null;
};

const MeetingList = ({ selectedId }: Props) => {
  const list = !!selectedId
    ? MEET_LIST_MOCKUP.filter(({ id }) => id === selectedId)
    : MEET_LIST_MOCKUP;

  return (
    <ScrollArea maxHeight={240}>
      {list.map((data) => (
        <MeetingListItem key={data.id} data={data} />
      ))}
    </ScrollArea>
  );
};

export default MeetingList;
