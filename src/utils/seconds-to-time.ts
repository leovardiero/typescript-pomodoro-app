import { zeroLeft } from './zero-left';

export function secondsToTime(seconds: number): string {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  const hours = zeroLeft(seconds / 3600);
  return `${hours}:${min}:${sec}`;
}
