<template>
  <div class="content">
    <h2>帮助文档</h2>

    <p>本文将会介绍《考勤可视化工具》的使用方法及一些注意事项。</p>

    <!-- 1 -->
    <h3>关于myxcel</h3>
    <p>myxcel -《考勤可视化工具》是九次方前端出品的一款通过可视化操作对我司考勤Excel文档（.xls和.xlsx）进行自动化导出的工具。</p>

    <h3>文件要求</h3>
    <p>Excel 文件的要求如下：</p>
    <ul>
      <li>我司现行使用的考勤Excel文档</li>
      <li>从第一列不为空的位置开始读取数据</li>
      <li>表格单元均要求是<strong>单一表格（即无合并表格）</strong> </li>
      <li>对于数据量较大的文件，该工具只会渲染 <strong>前30行数据</strong>，但导出的文件是完整的</li>
      <li>若文件过大（如遇到耗时过长的情况），建议将文件分割成几份后进行筛选过滤</li>
    </ul>
    <!-- 2 -->
    <h3>使用方法</h3>

    <!-- 2.1 -->
    <h5>导入文件</h5>
    <p>导入文件有四种方式：</p>
    <ol>
      <li>点击底部左侧的“<i class="fa fa-upload"></i>”按钮</li>
      <li>拖拽到指定区域（在未导入任何文件的情况下）</li>
      <li>双击左侧栏的文件名导入历史文件</li>
      <li>快捷键：Mac: Command + o，Windows: Ctrl + o</li>
    </ol>

    <!-- 2.2 -->
    <h5>导出文件</h5>
    <p>添加好所有筛选条件后，点击筛选列表右侧的“✅ ”按钮。点击该按钮后程序会根据你所添加的所有条件，一次性地对数据进行剔除/保留操作，最后程序会将过滤后的数据生成.xlsx文件。</p>

    <!-- 2.3 -->
    <h5>表格/图表操作</h5>
    <p>程序右上角可选择“表格”或“图表”操作。表格即普通Excel方式呈现数据，图表则以可视化的图表呈现数据。</p>
    <p><strong>为了方便阐述，下文将统一用“保留”。</strong> </p>
    <p>本程序目前主要提供3种筛选方式，分别是：</p>
    <ol>
      <li>单列运算逻辑</li>
      <li>多列运算逻辑</li>
      <li>双列范围逻辑</li>
    </ol>

    <p>这三种方式可通过表单的逻辑操作符（且/或）进行任意组合。另外，表单的“组别”下拉框提供了让多个筛选条件结合为组的功能。</p>
    <p>举例：A>20 &amp;&amp; (B="刘"||C="强")</p>
    <p>上述案例中，就应用了逻辑操作符 &amp;&amp; 和 || ，而括号内的运算就应用了“组别”功能（默认情况下，&amp;&amp; 的优先级比 || 高）。</p>

    <!-- 2.3.1 -->
    <h5>1. 单列运算逻辑</h5>
    <p>单列运算逻辑是对指定的一列进行筛选。</p>
    <p>点击“请选择列”按钮选择需要操作的列后，再选择下列操作符：</p>
    <table class="table is_bordered is_striped is_narrow">
      <tr>
        <th>大于（或等于）</th>
        <td>对数字和字母进行大于（或等于）比较操作，列的值若大于指定值就保留/该行数据。其中字母之间的比较是根据<a @click="openExternal('ascii')">ASCII表</a> 进行比较（如：a > A）</td>
      </tr>
      <tr>
        <th>小于（或等于）</th>
        <td>与【大于（或等于）】同理</td>
      </tr>
      <tr>
        <th>等于</th>
        <td>与【大于（或等于）】同理</td>
      </tr>
      <tr>
        <th>不等于</th>
        <td>与【大于（或等于）】同理</td>
      </tr>
      <tr>
        <th>包含</th>
        <td>判断该列数据是否含有指定值，<strong>若含有则保留该行数据</strong></td>
      </tr>
      <tr>
        <th>不包含</th>
        <td>判断该列数据是否含有指定值，<strong>若不含有则保留该行数据</strong></td>
      </tr>
      <tr>
        <th>开头字符</th>
        <td>判断该列数据的开头字符是否是指定值，<strong>若是则保留该行数据</strong></td>
      </tr>
      <tr>
        <th>结束字符</th>
        <td>判断该列数据的开头字符是否是指定值，<strong>若不是则保留该行数据</strong></td>
      </tr>
      <tr>
        <th>正则表达式</th>
        <td>指定值是正则表达式（默认标志是ig，即不区分大小写和全局搜索），<strong>若该列的值匹配该正则表达式，则保留该行数据</strong><br>例子：a?b+</td>
      </tr>
      <tr>
        <th>为空</th>
        <td>判断该列数据是否为空，若是则保留该行数据。</td>
      </tr>
      <tr>
        <th>不为空</th>
        <td>判断该列数据是否为空，若不是则保留该行数据。</td>
      </tr>
    </table>

    <p>备注：上述操作符均为<strong>基本操作符</strong>。</p>

    <!-- 2.3.2 -->
    <h5>2. 多列运算逻辑</h5>
    <p>多列运算逻辑是对你所选择的列进行指定运算后的再进行筛选的操作。</p>
    <p>通过点击“请选择列”按钮选择需要操作的列。注意：时间相关的操作只能选择两列。</p>
    <table class="table is_bordered is_striped is_narrow">
      <tr>
        <th>相加</th>
        <td>多列相加后进行基本操作符判断，若符合则保留</td>
      </tr>
      <tr>
        <th>相减</th>
        <td>多列相减后进行基本操作符判断，若符合则保留</td>
      </tr>
      <tr>
        <th>相乘</th>
        <td>多列相乘后进行基本操作符判断，若符合则保留</td>
      </tr>
      <tr>
        <th>相除</th>
        <td>多列相除后进行基本操作符判断，若符合则保留</td>
      </tr>
      <tr>
        <th>求余</th>
        <td>多列求余后进行基本操作符判断，若符合则保留</td>
      </tr>
      <tr>
        <th>时间相减</th>
        <td>两列时间相减后进行基本操作符判断（单位：分钟），若符合则保留</td>
      </tr>
    </table>

    <!-- 2.3.3 -->
    <h5>3. 双列范围逻辑</h5>
    <p>双列范围逻辑是对你所指定的两列范围内的列（包含自身）进行基本操作符判断，若该范围内<strong>至少有N列（默认1列）符合指定的判断条件，则保留该行</strong>。</p>
    <p>通过点击“请选择列”按钮选择需要操作的列，注意：只能选择两列。</p>
    <p>具体操作符与【单列运算逻辑】相同。</p>

    <!-- 2.4 -->
    <h3>数据去重</h3>
    <p>通过指定特定字段，对数据进行去重，从而保证“唯一性”。如：指定“身份证”列，那么程序只会保留“身份证”字段值相同的数据中的第一条。</p>
    <p>注：去重操作会在筛选操作后进行，避免因去重操作把有效数据提前去除（用户不需要关注这一点）。</p>

    <!-- 2.5 -->
    <h3>联系</h3>
    <p>如遇软件使用上的问题，请联系
      <a @click="openExternal('jusfoun-fe')">九次方前端</a>。同时，也欢迎你提出宝贵的意见。</p>
    <p>问题提交地址：
      <a @click="openExternal('issues')">问题提交链接</a>
    </p>
    <p>源码：
      <a @click="openExternal('github')">MYXCEL 源码</a>
    </p>
    <p>Skype：hankaibo</p>
    <div>
      <img src="./assets/qrcode.png" alt="九次方前端二维码">
    </div>
  </div>
</template>

<script>
import { openExternal } from '../../utils/openExternal'
export default {
  methods: {
    openExternal
  }
}
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  width: 100%;
  background-color: #fff;
  outline: 15px solid #fff;
  height: 100%;
  overflow: auto;
}

table th {
  white-space: nowrap;
  font-weight: 400;
}

.img_container {
  overflow: hidden;
  border-radius: 8px;
  width: 80%;
  img {
    width: 100%;
  }
}
</style>
