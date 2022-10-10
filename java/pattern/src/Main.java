import java.util.HashMap;
import java.util.Map;

public interface IRuleConfigParserFactory {
    IRuleConfigParser createParser();
}

public  class JsonRuleConfigParserFactory implements  IRuleConfigParserFactory {
    @Override
    public  IRuleConfigParser createParser() {
        return new JsonRuleConfigParser();
    }
}

public class XmlRuleConfigParserFactory implements IRuleConfigParserFactory {
    @Override
    public IRuleConfigParser createParser() {
        return new XmlRuleConfigParser();
    }
}

public class YamlRuleConfigParserFactory implements IRuleConfigParserFactory {
    @Override
    public IRuleConfigParser createParser() {
        return new YamlRuleConfigParser();
    }
}

public class PropertiesRuleConfigParserFactory implements IRuleConfigParserFactory {
    @Override
    public IRuleConfigParser createParser() {
        return new PropertiesRuleConfigParser();
    }
}

public  class RuleConfigParserFactoryMap {
    private  static  final Map<String, IRuleConfigParserFactory> cachedFactories = new HashMap<>();

    static  {
        cachedFactories.put("json", new JsonRuleConfigParserFactory());
        cachedFactories.put("xml", new XmlRuleConfigParserFactory());
        cachedFactories.put("yaml", new YamlRuleConfigParserFactory());
        cachedFactories.put("properties", new PropertiesRuleConfigParserFactory());
    }

    public  static  IRuleConfigParserFactory getParserFactory(String type) {
        if (type == null || type.isEmpty()) {
            return null;
        }
        IRuleConfigParserFactory parserFactory = cachedFactories.get(type.toLowerCase());
        return parserFactory;
    }
}

public  class RuleConfigSource {
    public RuleConfig load(String ruleConfigFilePath) {
        // ...
        IRuleConfigParserFactory parserFactory = RuleConfigParserFactoryMap.getParserFactory("xml");
        IRuleConfigParser parser = parserFactory.createParser();
        parser.parse();
    }
}
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");
    }
}