const diasDaSemana = ['日', '月', '火', '水', '木', '金', '土'];

// As datas do frontmatter viram meia-noite em UTC, por isso os getters UTC.
export function formatarData(data: Date) {
  const dia = diasDaSemana[data.getUTCDay()];
  return `${data.getUTCFullYear()}年${data.getUTCMonth() + 1}月${data.getUTCDate()}日（${dia}）`;
}
