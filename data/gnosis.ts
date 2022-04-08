import { IssuanceData } from './types'

export async function getGnosisData(): Promise<IssuanceData> {
  const req = await fetch("https://beacon.gnosischain.com/api/v1/epoch/latest", {
    "headers": {
      "content-type": "application/json",
    },
  });
  const { data } = await req.json();

  return {
    id: 'gnosis',
    name: 'Gnosis Beacon Chain',
    category: 'l1',
    sevenDayMA: data.validatorscount,
    oneDay: data.validatorscount,
  };
}
