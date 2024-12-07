import React from 'react';
import CopyToClipboard from "@/components/copy to clipboard/copy-to-clipboard";

const massage = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nihil\n" +
  "      nulla pariatur sequi temporibus, tenetur voluptates. Accusantium ad autem\n" +
  "      corporis eaque et ex laudantium neque nostrum placeat quisquam ut, velit."
const Page = () => {
  return (
    <section>
      {massage}
      <CopyToClipboard massage={massage} />
    </section>
  );
};

export default Page;
