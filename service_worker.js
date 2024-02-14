const sCacheName = "hello-pwa"; //캐시제목
const aFilesToCache = [
  //캐시할 파일 지정
  "./",
  "./index.html",
  "./manifest.json",
  "./images/hello-pwa.png",
];

//서비스워커 실행 & 캐시파일 저장
self.addEventListener("install", (pEvent) => {
  console.log("서비스워커 설치 완료");
  pEvent.waitUntil(
    caches.open(sCacheName).then((pCache) => {
      console.log("캐시에 파일 저장 완료");
      return pCache.addAll(aFilesToCache);
    })
  );
});

//고유 번호 할당받은 서비스 워커 동작 시작
self.addEventListener("activate", (pEvent) => {
  console.log("서비스워커 동작 시작됨");
});

//고유 번호를 할당 받은 서비스워커 작동
self.addEventListener("fetch", (pEvent) => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then((response) => {
        if (!response) {
          console.log("네트워크로 데이터 요청", pEvent.request);
          return fetch(pEvent.request);
        }
        console.log("케시에서 데이터 요청", pEvent.request);
        return response;
      })
      .catch((err) => console.log(err))
  );
});
