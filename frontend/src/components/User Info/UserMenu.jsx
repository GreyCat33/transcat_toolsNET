import Logout from "../Logout"
import phoneSVG from "~/assets/svg/phone.svg"
import emailSVG from "~/assets/svg/email.svg"
import fingerprintSVG from "~/assets/svg/fingerprint.svg"
import roleAdminSVG from "~/assets/svg/role_admin.svg"
import roleUserSVG from "~/assets/svg/role_user.svg"

export default function UserMenu({ AuthUserdata, onMouseLeave }) {
    const role = AuthUserdata["http://localhost:5173/claims/roles"];
    const roleImg = (role == "Admin") ? roleAdminSVG : roleUserSVG;
    return (
        <div
            onMouseLeave={onMouseLeave}
            style={{
                position: "absolute",
                top: "100%",
                right: "0",
                marginTop: "8px",
                padding: "12px",
                background: "#f5f5f5",
                color: "black",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "8px",
                minWidth: "300px",
                zIndex: "1000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >

            <hr />
            <div>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h2>User Info</h2>
                </div>
                <hr />
                <div>
                    <div style={styles.info}>
                        <img src={emailSVG} width={"32px"} style={styles.svg} />
                        <p>{AuthUserdata.email}</p>
                    </div>
                    <div style={styles.info}>
                        <img src={phoneSVG} width={"32px"} style={styles.svg} />
                        <p>(123)555-4565</p>
                    </div>
                    <div style={styles.info}>
                        <img src={fingerprintSVG} width={"32px"} style={styles.svg} alt="fingerprint" title="Auth0 ID" />
                        <p>{AuthUserdata.sub}</p>
                    </div>
                    <div style={styles.info}>
                        <img src={roleImg} width={"32px"} style={styles.svg} alt="role" title="Role" />
                        <p>{role}</p>
                    </div>
                </div>
            </div>
            
            <Logout />
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