import dayjs from "dayjs";

export default function Convertdate({convertDate}) {
    const publishedAt = dayjs(convertDate).format('YYYY年MM月DD日');
    return (
        <time dateTime = {convertDate}>
            {publishedAt}
        </time>
    );
} 