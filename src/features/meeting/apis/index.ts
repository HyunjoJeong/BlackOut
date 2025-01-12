import { APIServer } from '@/config/axios';
import type { PartyDetailDto, PartyListItemDto } from '../types/dto';

export const getPartyList = async () => {
  const { data } = await APIServer.get<PartyListItemDto[]>('/parties');
  return data;
};

export const getPartyDetail = async (partyId: number) => {
  const { data } = await APIServer.get<PartyDetailDto>(`/parties/${partyId}/`);
  return data;
};

export const getMyParty = async () => {
  const { data } = await APIServer.get<PartyListItemDto[]>('/parties/my');
  return data;
};

export const createNewParty = async (formData: MeetingFormData) => {
  await APIServer.post('/create', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const postPartyJoin = async (partyId: number) => {
  const { data } = await APIServer.post(`/parties/${partyId}/join`);
  return data;
};

export const postPartyStart = async (partyId: number) => {
  const { data } = await APIServer.post(`/parties/${partyId}/start`);
  return data;
};

export const postPartyEnd = async (partyId: number, formData: MeetingImageFormData) => {
  await APIServer.post(`/parties/${partyId}/end`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
