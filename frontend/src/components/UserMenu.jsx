import Logout from "./Logout"
export default function UserMenu({user, onLogout,onMouseLeave}){
    return (
        <div
            onMouseLeave={onMouseLeave}
            style={{
                position:"absolute",
                top:"100%",
                right:"0",
                marginTop:"8px",
                padding:"12px",
                background:"#fff",
                color:"black",
                boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
                borderRadius:"8px",
                minWidth:"300px",
                zIndex:"1000",
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
            }}
        >

            <hr />
            <p style={{margin: "4px 0", fontSize:"14", wordBreak:"break-all"}}>
                <strong>ID: </strong>
                
                {user.sub}
            </p>
            <p style={{margin: "4px 0", fontSize:"14", wordBreak:"break-all"}}>
                <strong>Email: </strong>
                
                {user.email}
            </p>
            <hr />
            <Logout />
        </div>
    )
}