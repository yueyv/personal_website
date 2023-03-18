<template>
  <div class="Card">
    <div>
      <div class="content">
        新华社北京3月16日电
        题：始终坚持人民至上——二论学习贯彻习近平主席在十四届全国人大一次会议上的重要讲话
        新华社评论员
        “我们要始终坚持人民至上。”习近平主席在十四届全国人大一次会议上的重要讲话，坚持人民主体地位，坚持以人民为中心的发展思想，充分彰显我们党为人民谋幸福、为民族谋复兴的不变初心和使命担当，凝聚起强国建设、民族复兴的磅礴力量。
        人民是历史的创造者，是真正的英雄。党的十八大以来，以习近平同志为核心的党中央团结带领亿万人民攻坚克难、顽强拼搏，打赢了一场又一场硬仗，取得了一个又一个彪炳史册的胜利。“用众人之力，则无不胜也”。历史已经并将继续证明，无论遇到任何困难和挑战，只要有人民支持和参与，就没有克服不了的困难，就没有越不过的坎，就没有完成不了的任务。全面建成社会主义现代化强国，人民是决定性力量。在强国建设、民族复兴的新征程上，坚持人民至上、站稳人民立场，维护人民根本利益，增进民生福祉，不断实现发展为了人民、发展依靠人民、发展成果由人民共享，就一定能充分调动广大人民的积极性主动性创造性，汇聚起同心共圆中国梦的强大合力。
        人民民主是社会主义的生命，是全面建设社会主义现代化国家的应有之义。我国全过程人民民主是最广泛、最真实、最管用的民主，不仅有完整的制度程序，而且有完整的参与实践。新征程上，要积极发展全过程人民民主，坚持党的领导、人民当家作主、依法治国有机统一，健全人民当家作主制度体系，扩大人民有序政治参与，保证人民依法实行民主选举、民主协商、民主决策、民主管理、民主监督，充分体现人民意志、保障人民权益、激发人民创造活力。
        人民对美好生活的向往，是我们的奋斗目标。要牢牢把握人民幸福安康这个推动高质量发展的最终目的，贯彻以人民为中心的发展思想，完善分配制度，健全社会保障体系，强化基本公共服务，兜牢民生底线，持续增进民生福祉，不断提高人民生活品质。要心怀“国之大者”，以百姓心为心，想群众之所想、急群众之所急、办群众之所需，解决好人民群众急难愁盼问题。要着力维护和促进社会公平正义，既做大“蛋糕”，又分好“蛋糕”，让现代化建设成果更多更公平惠及全体人民，在推进全体人民共同富裕上不断取得更为明显的实质性进展。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {  onMounted } from "vue";
const props = defineProps({
  msg: String,
});
//请无视onmounted里的逻辑 这只是一个传参示例 清空.content然后添加一个图片
onMounted(() => {
  const odom = document.querySelector(".content");

  if (props.msg) {
    ((odom as unknown) as HTMLElement).innerHTML = "";
    ((odom as unknown) as HTMLElement).innerHTML = `${props.msg}`;
  }
});
</script>

<style scoped lang="less">
.Card {
  width: 100%;
  height: 0;
  border-radius: 5px;
  padding-bottom: 100%;
  background-image: radial-gradient(rgba(255, 221, 213, 0.944),rgb(253, 197, 185));
  position: relative;
  > div {
    padding: 10px;
    box-sizing: border-box;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
  }
  .content {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 17;
    word-wrap: break-word;
    word-break: break-all;
    -webkit-box-orient: vertical;
  }
}
</style>
