import Link from "next/link";
import Image from "next/image";

export default function WorkCard({ href, image, title, category, tag }) {
  return (
    <div className="work fadeIn">
      <div className="work-img">
        <Link href={href}>
          <Image src={image} />
        </Link>
      </div>
      <div className="work-sub">
        <p className="work-ttl">{title}</p>
        <p className="work-desc">
          {category}
          <span>｜</span>
          {tag}
        </p>
      </div>
    </div>
  );
}