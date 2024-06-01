import React from "react";

export default function PatchNote({
  date,
  content,
}: {
  date: string;
  content: string;
}) {
  return (
    <li>
      <h4>{date}</h4>
      <p>{content}</p>
    </li>
  );
}
