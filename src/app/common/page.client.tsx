"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Text, Button, Flex, Table } from "@chakra-ui/react";
import { AnchorLink } from "@/components/AnchorLink";
import { Card } from "@/components/Card";

const TextFadeIn = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const animationStartDelay = 0.6;

const StyledCardSection = styled(Card.Section)<{ delay: number }>`
  animation: 0.5s ease calc(${({ delay }) => delay}s + ${animationStartDelay}s)
    1 running both ${TextFadeIn};
  transform-origin: center;
`;

const Page: React.FC = () => {
  const [transitionEnded, setTransitionEnded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.sessionStorage.setItem("navigationStatus", "navigationEnd");
    }, 100);
    setTimeout(() => {
      setTransitionEnded(true);
    }, 200);
  }, []);

  let delayCount = 0;

  return (
    <>
      <Flex
        maxW="1200px"
        marginX="auto"
        flexDirection="column"
        align="center"
        justify="center"
      >
        <Card
          title={
            <Card.Title
              className={
                !transitionEnded ? "menuHeaderTransition common" : undefined
              }
            >
              参加する全ての総理の皆さんへ
            </Card.Title>
          }
        >
          <StyledCardSection delay={delayCount++ / 10} title="はじめに">
            一般参加を予定される総理の皆さんは、下記の諸注意をお読みいただいた上でご参加ください。
            <br />
            なお、ご不明な点がございましたら、お気軽に主催メールアドレス宛にお問い合わせください。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="イベント名">
            政剣マニフェスティアオンリー同人誌即売会
            <br />
            緊急交流イベント「漕ぎ出せ！ソクバイ海Ⅶ」
            <br />
            #アイムソウリー2024
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="日程・会場">
            2024年9月15日（日曜日）
            <br />
            ハイライフプラザいたばし
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="イベントスケジュール"
          >
            <Table.Root>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>10:30</Table.Cell>
                  <Table.Cell>
                    【サークル】参加総理入場開始
                    <br />
                    【更衣室】開場
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>12:30</Table.Cell>
                  <Table.Cell>
                    【一般】参加総理入場開始
                    <br />
                    【即売会】開始
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>14:30</Table.Cell>
                  <Table.Cell>【即売会】終了</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>15:30</Table.Cell>
                  <Table.Cell>【アフターイベント】開始</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>18:00</Table.Cell>
                  <Table.Cell>【更衣室】閉鎖</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>20:00</Table.Cell>
                  <Table.Cell>【会場】完全撤収</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
            <br />
            <br />
            ※その他詳細スケジュールは後日お知らせします
            <br />
            ※スケジュールは変更になることがあります
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="参加費">
            <Card.Contents title="サークル参加の総理の皆さん">
              「<AnchorLink to="/circle">サークル参加</AnchorLink>
              」ページをご確認ください。
            </Card.Contents>
            <Card.Contents title="一般参加の総理の皆さん">
              前売券を
              <Text as="span" fontWeight="400">
                開催当日の00:00
              </Text>
              まで販売します。
              <br />
              前売券は、LivePocketを利用したデジタルチケットです。
              <br />
              お支払い方法など、詳細は販売ページにてご確認ください。
              <br />
              本ページの最後に販売ページへのリンクがあります。
              <br />
              <br />
              前売券のQRコードチケットは【1人1枚】必要です。
              <br />
              当日入場時に本チケットのQRコードをイベント本部にてご提示ください。
              <br />
              QRコードが表示された画面、もしくは画面を印刷したもので受付可能です。
              <br />
              <br />
              今回の前売券は1種類です。
              <br />
              <br />
              ・【前売券】1000円
              <br />
              <br />
              当日券もご用意しております。
              <br />
              開催当日の00:00からLivePocketにて販売します。
              <br />
              また、当日券は開催当日の会場受付にて現金でもご購入いただけます。
              <br />
              <br />
              ・【当日券】1500円
            </Card.Contents>
            <Card.Contents title="コスプレ参加の総理の皆さん">
              一般参加費に加えて、コスプレ登録・更衣室使用料を更衣室入室の際に頂戴いたします。
              <br />
              詳細は「<AnchorLink to="/cosplay">コスプレ参加</AnchorLink>
              」ページをご確認ください。
            </Card.Contents>
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="迷惑行為、危険行為の禁止"
          >
            ・会場内外で走る、受付より外の会場外共用部に長時間立ち止まる、などの行為はご遠慮ください。
            <br />
            ・一箇所のサークルスペース前に長時間居座る、近隣のサークルスペースの前にはみ出す、などの行為は、他の参加者の迷惑になりますのでご遠慮ください。
            <br />
            ・会場は禁煙、禁酒です。喫煙は指定の喫煙スペースにてお願いします。
            <br />
            ・会場内や会場周辺での勧誘行為、パフォーマンスなどの混乱が予想される行為は禁止です。
            <br />
            ・モデルガン・エアガンなどの武器類、楽器などの大きな音の鳴る物、引火物、アルコール（消毒用途を除く）、ペット、その他危険と思われるものの持ち込みは禁止です。
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="会場内撮影について"
          >
            ・会場内での動画撮影は一切禁止です。
            <br />
            ・会場内での写真撮影はサークルスペースや展示物、コスプレの撮影に限り可能です。ただし、人物が写り込まないようにご配慮ください。もし写り込んでしまったものをSNS等にアップロードする場合は【必ず加工を施し】個人の特定ができないようにしてください。
            <br />
            ・サークルスペースやコスプレイヤーを撮影する際、また撮影したものをSNSにアップロードする際には、被写体のサークル参加者やコスプレ参加者に許可を得てください。
            <br />
            ・コスプレ撮影を行う場合、サークルスペースが写り込まないようにご配慮ください。
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="会場利用規約厳守のお願い"
          >
            ・共用部のコンセントの使用は禁止です。
            <br />
            ・荷物は受付より外の共用部には絶対に置かないでください。
            <br />
            ・ゴミは所定の場所に捨ててください。所定の場所以外の箇所でのポイ捨ては厳禁です。
            <br />
            ・会場内非常口の前に荷物を置かないようにお願いいたします。
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="喫煙に関するお願い"
          >
            ・喫煙スペースは今回【廃止】となりました。ご了承ください。
            <br />
            ・会場近隣の喫煙所をご利用ください。
            <br />
            ・なお、喫煙所以外での喫煙は厳禁です。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="落とし物について">
            ・落とし物・忘れ物などは【会場本部】までお届けください。
            <br />
            ・金銭・貴重品の紛失につきましては当イベント主催者では責任を負いかねますので、貴重品の管理にご注意ください。
          </StyledCardSection>
          <StyledCardSection delay={delayCount++ / 10} title="その他">
            ・緊急の場合を除き、個人的な呼び出しはできません。
            <br />
            ・ケガをした方、気分の悪くなった方はお近くの戦挙管理委員までお申し出ください。
            <br />
            ・飲食物の持ち込みは可能ですが、会場を汚されないよう十分ご注意ください。
            <br />
            ・イベント会場内での手作り食品の差し入れはご遠慮ください。
            <br />
            ・コスプレまたはコスプレと判断されるような服装での入場・退場は禁止です。コスプレをされる場合、所定の更衣室での着替えをお願い致します。
            <br />
            ・会場外における事故・トラブルにつきまして当イベント主催者は保障できません。ご来場、ご帰宅の際はご注意ください。
            <br />
            ・会場内におけるマスクの着用は任意とします。
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="コスプレに関する諸注意"
          >
            ・コスプレ参加者向けのページ&nbsp;に掲載しております。コスプレ参加予定の方はご一読ください。
            <br />
            <AnchorLink to="/cosplay">https://festia.moe/cosplay</AnchorLink>
          </StyledCardSection>
          <StyledCardSection
            delay={delayCount++ / 10}
            title="※一般参加者による会場内頒布行為の禁止※"
          >
            会場内では、一般参加者による同人誌、同人グッズ、あるいはそれに準ずるものの頒布行為は全面的に禁止です。
            <br />
            一般参加者からサークル参加者への差し入れ等は良識の範囲内でお願い致します。
            <br />
            目に余る行為が見受けられた場合はご退場をお願いする場合もあります。
            <br />
            即売会を皆様に楽しんでいただくため、ご協力をお願い致します。
            <br />
            会場内で頒布行為をしたい方は是非ともサークル参加を！
          </StyledCardSection>
        </Card>
        <Card title="プライバシーポリシー">
          <Card.Section title="">
            戦挙管理委員会（以下「当会」といいます）は、個人情報の保護に関する法令等を遵守するとともに、本プライバシーポリシーを遵守します。
          </Card.Section>
          <Card.Section title="1. 個人情報の定義">
            個人情報とは、氏名、住所、生年月日、年齢、性別、電話番号、電子メールアドレス、IPアドレス、銀行口座番号のうち、1つあるいは2つ以上を組み合せることによって、特定の個人を識別できるものを指します。
          </Card.Section>
          <Card.Section title="2. 個人情報の取得">
            当会は、個人情報を、適正な手段により取得いたします。
          </Card.Section>
          <Card.Section title="3. 個人情報の利用目的">
            当会は、主催する即売会・イベント等において、個人情報を、以下の目的で利用し、ご本人の同意を頂いた範囲内においてのみ取り扱います。
            <br />
            (1) 即売会・イベント等の運営に必要な情報を処理するため
            <br />
            (2) 即売会・イベント等に関する重要事項を参加者に連絡するため
            <br />
            (3) 即売会・イベント等の運営上のトラブルを解決するため
          </Card.Section>
          <Card.Section title="4. 個人情報の第三者への提供">
            当会は、個人情報保護法その他の法令により認められる事由がある場合を除き、ご本人の同意なくして、第三者に提供・開示しません。
          </Card.Section>
          <Card.Section title="5. 個人情報の安全管理">
            当会は、個人情報を適切に管理し、個人情報の漏えい、滅失、毀損等に対する予防措置を講じます。
          </Card.Section>
          <Card.Section title="6. 個人情報の開示、訂正、苦情等">
            当会は、個人情報について、開示、訂正、苦情等について、ご本人からのお申出があった場合には、お申出頂いた方がご本人であることを確認の上、個人情報保護法の定めに従い、速やかに対応いたします。
          </Card.Section>
          <Card.Section title="7. プライバシーポリシーの変更">
            当会は、必要に応じて、本プライバシーポリシーの内容を改定することがあります。その場合、変更箇所を速やかに公表するものとします。
          </Card.Section>
          <Card.Section title="8. お問い合わせ窓口">
            戦挙管理委員会&nbsp;seimani.only[at]gmail.com
          </Card.Section>
        </Card>
        <Card title="一般参加チケット販売">
          <Card.Section title="">
            <AnchorLink
              href="https://t.livepocket.jp/e/seimani-only-7"
              target="_blank"
              rel="noreferrer"
            >
              <Button as="span" colorScheme="blue">
                LivePocket&nbsp;イベントページ
              </Button>
            </AnchorLink>
          </Card.Section>
        </Card>
      </Flex>
    </>
  );
};

export default Page;
