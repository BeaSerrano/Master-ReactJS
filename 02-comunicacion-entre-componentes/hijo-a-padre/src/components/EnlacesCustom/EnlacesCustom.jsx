export const EnlacesCustom = ({ url, srcImg, classLogo, altUrl }) => {
    return(
        <a href={url} target="_blank">
            <img src={srcImg} className={classLogo} alt={altUrl} />
        </a>
    )
}