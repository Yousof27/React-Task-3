import './articals.css'

export default function Artical({name, email, job}) {
    return (
        <div className="artical">
            <h2 className="name">{name}</h2>
            <h3 className="email">{email}</h3>
            <hr style={{ width: "100%" }} />
            <p className="desc">my name is {name} and iam a {job !== `software tester` ? `${job} developer.` : `${job}.`}</p>
        </div>
    );
}