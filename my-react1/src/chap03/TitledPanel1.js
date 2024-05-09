import { dividerClasses } from "@mui/material";

export default function TitledPanel1 ({ children }) {
    const title = children.find(e => e.key === 'title');
    const body = children.find(e => e.key === 'body');

    return (
        <div style={{
            margin: 50,
            padding: 5,
            border: '1px solid #000',
            width: 'fit-content',
            boxShadow: '10px 5px 5px #999',
            backgroundColor: '#fff'
        }}>
            {title}
            <hr />
            {body}
        </div>
    );
};