# samples-kendo
UI Component Sample


###  AspNetCore 프로젝트 생성 시 기본 참조

''' bash
# Core 2.0
> Core는 MVC관련 Microsoft.AspNetCore.All 하나로 통합
<PackageReference Include="Microsoft.AspNetCore.All" Version="2.0.0" />
<PackageReference Include="Microsoft.NETCore.App" Version="2.0.0" />
<PackageReference Include="Telerik.UI.for.AspNet.Core" Version="2018.1.117" />

# .Net (MVC6)
> .Net는 수동 참조

<PackageReference Include="Microsoft.AspNetCore" Version="2.0.1" />
<PackageReference Include="Microsoft.AspNetCore.Mvc" Version="2.0.2" />
<PackageReference Include="Microsoft.AspNetCore.Mvc.Razor.ViewCompilation" Version="2.0.2" PrivateAssets="All" />
<PackageReference Include="Microsoft.AspNetCore.Hosting" Version="2.0.1" />
<PackageReference Include="Microsoft.VisualStudio.Web.BrowserLink" Version="2.0.1" />
<PackageReference Include="Microsoft.AspNetCore.StaticFiles" Version="2.0.1" />
<PackageReference Include="Microsoft.AspNetCore.Diagnostics" Version="2.0.1" />
<PackageReference Include="Telerik.UI.for.AspNet.Core" Version="2018.1.117" />

# 기타 참조
<PackageReference Include="Microsoft.AspNetCore.Authentication.Cookies" Version="2.0.1" />
<PackageReference Include="Microsoft.AspNetCore.Authentication.Twitter" Version="2.0.1" />
<PackageReference Include="Microsoft.AspNetCore.Server.IISIntegration" Version="2.0.1" />
<PackageReference Include="Microsoft.AspNetCore.Server.Kestrel" Version="2.0.1" />
<PackageReference Include="Microsoft.Extensions.Logging" Version="2.0.0" />
<PackageReference Include="Microsoft.Extensions.Options.ConfigurationExtensions" Version="2.0.0" />
<PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="2.0.2">
<PackageReference Include="Newtonsoft.Json" Version="10.0.3" />
'''