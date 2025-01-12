import ScrollArea from '@/global/components/ScrollArea';
import { PartyListItemDto } from '../types/dto';
import MeetingListItem from './MeetingListItem';

type Props = {
  datas: PartyListItemDto[] | undefined;
  selectedId: number | null;
};

const MeetingList = ({ datas, selectedId }: Props) => {
  const list = !!selectedId ? datas?.filter(({ id }) => id === selectedId) : datas;

  return (
    <ScrollArea maxHeight={240}>
      {list?.map((data) => (
        <MeetingListItem key={data.id} data={data} />
      ))}
    </ScrollArea>
  );
};

export default MeetingList;
