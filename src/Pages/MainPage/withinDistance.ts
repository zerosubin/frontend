export function withinDistance(lat1:number, lon1:number , lat2:number, lon2:number) {
    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    return distance <= 3; // 3km 이내인지 확인
  }

function calculateDistance(lat1:number, lon1:number , lat2:number, lon2:number) {
    const R = 6371; // 지구 반지름 (단위: km)
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // 최단 거리 (단위: km)
    return distance;
  }
  
  function deg2rad(deg:number) {
    return deg * (Math.PI / 180);
  }