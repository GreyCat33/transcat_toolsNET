import  phoneSVG from "../../assets/svg/phone.svg"
import emailSVG from "../../assets/svg/email.svg"
import nicknameSVG from "../../assets/svg/user_nickname.svg"
import fingerprintSVG from "../../assets/svg/fingerprint.svg"
import roleAdminSVG from "../../assets/svg/role_admin.svg"
import roleUserSVG from "../../assets/svg/role_user.svg"

export default function UserCard({AuthUserdata}){

    const role = AuthUserdata["http://localhost:5173/claims/roles"];
    const roleImg = (role == "Admin") ? roleAdminSVG : roleUserSVG;
    
     return(
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center"
        }}>

            <div>
                <img src={AuthUserdata.picture}  width={"200px"} style={styles.authImg} />
                <div style={styles.info}>
                    <img src={nicknameSVG} width={"32px"} style={styles.svg} />
                        <p>{AuthUserdata.nickname}</p>
                </div>
            </div>
            <div>
                <div>
                    <div style={styles.info}>
                        <img src={emailSVG} width={"32px"} style={styles.svg} />
                        <p>{AuthUserdata.email}</p>
                    </div>
                     <div style={styles.info}>
                        <img src={phoneSVG} width={"32px"} style={styles.svg}/>
                        <p>(123)555-4565</p>
                    </div>
                    <div style={styles.info}>
                        <img src={fingerprintSVG} width={"32px"} style={styles.svg}  alt="fingerprint" title="Auth0 ID" />
                        <p>{AuthUserdata.sub}</p>
                    </div>
                    <div style={styles.info}>
                        <img src={roleImg} width={"32px"} style={styles.svg} alt="role" title="Role"/>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    info: {
        display:"flex",
        padding:"0 20px"
    },
    svg:{
        paddingRight:"10px"
    },
    authImg:{
        borderRadius:"50%"
    }
}