import memberlist from "@/api/memberList";

export default class MemberListService {

    //DB 연결 해서 호출 하는 부분
    getm = async () => {
        return await memberlist.get('member').then(d => d.data);
    }

    //로컬 public 하위 data 디렉토리에 있는 파일 값 호출
    getMemberList() {
		return fetch('data/member-list.json').then(res => res.json()).then(d => d.data);
    }
	
}