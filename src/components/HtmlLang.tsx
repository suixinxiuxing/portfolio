export default function HtmlLang({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <html lang="zh-CN" className={className}>
      {children}
    </html>
  );
}
