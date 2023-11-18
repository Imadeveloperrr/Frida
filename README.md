# Frida

- loco.protocol.LocoHeader = a
- loco.protocol.LocoMethod = b
- loco.protocol.LocoProtocol = c
- 01058507180

- libdialogid_api function에서 a쪽 의심
- libDSToolkitV30Jni.so : master_createKeys 추적

##### CipherSuite  TLS/SSL 프로토콜에서 사용되는 암호화 스위트를 표현하는 클래스
- TLS : 프로토콜의 버전
- ECDHE : 키 교환 알고리즘 (타원 곡선 디피-헬만)
- ECDSA : 인증 알고리즘 (타원 곡선 디지털 서명)
- AES_128_GCM : 암호화 알고리즘 (고급 암호화 표준 128비트 갈루아/카운터 모드)
- SHA256 : 메시지 인증 알고리즘 (안전 해시 알고리즘 256비트)

------------------------------     frida 명령어     ------------------------------

frida-ps -Uai


frida -U -f com.kakao.talk -l C:\FirstWorkspace\Frida\locoProtocol.js

---------------------------------------------------------------------------------

### 로코바디에서 반환되는 클래스 주소
- apktool b --use-aapt2 C:\Users\USER\Downloads\kakaoTalk1 kakao.apk
- keytool -genkeypair -v -keystore test.jks -keyalg RSA -keysize 1024 -validity 10000 -alias test
- jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore test.jks KakaoTalk.apk test


- e31.a = com.kakao.talk.loco.protocol.LocoReq

- locoBody chatid=방식별번호

#### 마지막 수정 
- smali 변경 httpScheme 
- const/16 v1, 0x1bb = 443 
- const-string v2, "https" 

- $className: com.iap.ac.android.ld0.h 

