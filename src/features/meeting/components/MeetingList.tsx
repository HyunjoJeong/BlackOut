import ScrollArea from '@/global/components/ScrollArea';
import { MEET_LIST_MOCKUP } from '../constants';
import MeetingListItem from './MeetingListItem';
import { PartyListItemDto } from '../types/dto';

type Props = {
  datas: PartyListItemDto[];
  selectedId: number | null;
};

const MeetingList = ({ datas, selectedId }: Props) => {
  const list = !!selectedId ? datas.filter(({ id }) => id === selectedId) : datas;

  return (
    <ScrollArea maxHeight={240}>
      {list.map((data) => (
        <MeetingListItem key={data.id} data={data} />
      ))}
    </ScrollArea>
  );
};

export default MeetingList;
